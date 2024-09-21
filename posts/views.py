from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .forms import PostForm
from .models import Post
from django.http import Http404  # Import Http404

@login_required
def create_post(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.save()
            return redirect('post_detail', post.pk)  # Adjust URL pattern
    else:
        form = PostForm()
    return render(request, 'posts/create_post.html', {'form': form})

@login_required
def edit_post(request, post_id):
    try:
        post = Post.objects.get(pk=post_id)
    except Post.DoesNotExist:  # Handle case where post doesn't exist
        return Http404()
    if request.user != post.author:
        return Http404()

    if request.method == 'POST':
        form = PostForm(request.POST, instance=post)
        if form.is_valid():
            form.save()
            return redirect('post_detail', post.pk)  # Adjust URL pattern
    else:
        form = PostForm(instance=post)
    return render(request, 'posts/edit_post.html', {'form': form})

def post_detail(request, post_id):
    try:
        post = Post.objects.get(pk=post_id)
    except Post.DoesNotExist:  # Handle case where post doesn't exist
        return Http404()
    comments = post.comment_set.all()  # Assuming you have a Comment model
    return render(request, 'posts/post_detail.html', {'post': post, 'comments': comments})