
const categoryImages = {
  Birthday: [
    "https://images.unsplash.com/photo-1562967005-a3c85514d3e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1599785209796-786432b228bc?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1562804698-732e972e46e4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ],
  
  Valentine: [
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    "https://images.unsplash.com/photo-1705562600317-dc7906327d25?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1767790692459-cdd99cec473c?q=80&w=684&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1587052755556-89808205c097?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1673488825874-36f1403311ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ],
  Christmas: [
    "https://images.unsplash.com/photo-1543589077-47d81606c1bf",
    "https://images.unsplash.com/photo-1512389142860-9c449e58a543"
  ],
  Anniversary: [
    "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f",
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946"
  ]
};

let id = 1;
const products = [];

Object.keys(categoryImages).forEach((category) => {
  categoryImages[category].forEach((img, index) => {
    products.push({
      id: id++,
      title: `${category} Gift ${index + 1}`,
      category,
      price: 499 + index * 300,
      image: img
    });
  });
});

export default products;
