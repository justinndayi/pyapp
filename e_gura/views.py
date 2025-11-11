from django.shortcuts import render

def home(request):
    products = [
        {"id":1,"title":"Brown Cow - Grade A","price":"RWF 120,000","image":"e_gura/images/product1.jpg","seller":"Kigali Farm","badge":"Hot"},
        {"id":2,"title":"Feed Bundle 20kg","price":"RWF 8,500","image":"e_gura/images/product2.jpg","seller":"Agri Supplies","badge":""},
        {"id":3,"title":"Dairy Tools Kit","price":"RWF 23,500","image":"e_gura/images/product3.jpg","seller":"FarmTools","badge":"New"},
        {"id":4,"title":"Vaccination Pack","price":"RWF 12,300","image":"e_gura/images/product4.jpg","seller":"VetCare","badge":""},
    ]
    return render(request,'e_gura/home.html',{"products":products})
