const canvas=document.getElementById("myCanvas");

canvas.width=200;


const ctx = canvas.getContext("2d");
const car= new Car(100,100,30,50);
car.draw(ctx);

animate();

function animate(){
    car.update();
    canvas.height=window.innerHeight;
    car.draw(ctx);
    //calls animation frame many times per second so it looks like the car is moving
    requestAnimationFrame(animate);  
}