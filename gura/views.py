from django.http import HttpResponse
from django.shortcuts import render

# Simple home view
def home(request):
    return render(request, "e_gura/home.html")

# Example page view
def about(request):
    return HttpResponse("This is the About page of e_gura app.")


def shop(request):
    return render(request, 'e_gura/shop.html')


