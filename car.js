class Car{
    //constructor class for creating car
    //we have attributes for what the size of the car and where it is 
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;

        this.controls= new this.Controls();
    }

    //draw method gets context as paramer
    draw(ctx){
        ctx.beginPath();
        ctx.rect(
            this.x-this.width/2, //x is the center of the car
            this.y-this.height/2, 
            this.width,
            this.height
        );
        ctx.fill();
    }
}