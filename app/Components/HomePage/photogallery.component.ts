import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'imagegallery',
    template: `<div class="slider">
	                <div class="slide" >
                        <img src="images/homepage/{{images[index].url}}"/>
                    </div>
                    <div class="indicator">
                        <ul>
                            <li *ngFor="let indicator of indicators">
                                <img src="images/homepage/{{indicator}}"/>
                            </li>
                        </ul>
                    </div>
                   
                </div>`,
    styleUrls:['app/Components/HomePage/photogallery.css']
})
export class PhotoGalleryComponent implements OnInit
{
    images : GallaryImage[];
    indicators: string[];
    index : number;
    timer: NodeJS.Timer;

    constructor()
    {
    }

    ngOnInit()
    {
        this.index = 0;
        this.images = [{url: "img1.png", visible: true}, 
                        {url: "img2.jpg", visible:false},
                        {url: "img3.jpg", visible:false},
                        {url: "img4.png", visible:false},
                        {url: "img5.png", visible:false}];
        this.indicators = new Array(this.images.length).fill("unselected.jpg");
        this.indicators[0] = "selected.jpg";
        this.timer = global.setInterval(()=>{this.next()}, 2000);
    }

    prev()
    {
        this.index = this.index - 1;
        if(this.index < 0)
        {
            this.index = this.images.length - 1;
        }
    }

    next()
    {
        this.indicators[this.index] = "unselected.jpg";
        this.index = this.index + 1;
        if(this.index >= this.images.length)
        {
            this.index = 0;
        }
        this.indicators[this.index] = "selected.jpg";
    }

}

class GallaryImage
{
    url : string;
    visible : boolean;
}