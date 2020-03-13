[Bitter Home Page](https://bitterapp.herokuapp.com/#/)

# Bitter 

Bitter is a clone of [Untappd](https://untappd.com/), a social media app where users review and discuss beer.
When drinking a beer, a user posts a `checkin` and can rate the beer between one and five points.

## Technologies 

### Back End
* **Ruby**
* **Rails**: server-side framework
* **PostgreSQL**: database management

### Front End
* **JavaScript**
* **React**: UI framework
* **Redux**: application state management

## Feature Highlights

### Beer Rating Bar 

When a user rates a beer, the rating is rendered as a row of 'bottle cap' icons, where each orange icon represents one point:

![rating](https://user-images.githubusercontent.com/55966501/76643665-c066ca00-6512-11ea-84a7-48e5ec4cee72.png)

The rating is a JS array, `caps`, that contains five `img` elements, one for each 'bottle cap' icon. The array is filled with the quantity of orange caps that corresponds to the beer's rating. The gray caps are added by subtracting the quantity of orange caps from five: 

```JavaScript
let caps = [];
for (let i = 1; i <= rating; i++) {
  caps.push(<img className="cap" src="cap-100.png" alt="cap-0" key={i}/>)
}
for (let i = rating + 1; i <= 5; i++ ) {
    caps.push(<img className="cap" src="cap-0.png" alt="cap-0" key={i}/>)
}
```

### Toggle-able Description Length

Each brewery and beer has a description. Many descriptions exceed 1000 characters. To reduce the amount of space it occupies on the page, each description is initially rendered as only its first 120 characters. A `...Show More` button can be clicked to expand the description to it's full length:

![description](https://user-images.githubusercontent.com/55966501/76646151-b8f5ef80-6517-11ea-99ec-29c634a91e6b.png)

Once the full description is rendered, a `...Show Less` button can be clicked to shorten it again:

![description-long](https://user-images.githubusercontent.com/55966501/76646470-40dbf980-6518-11ea-9757-61893fc13deb.png)

The `'...Show More'`/`'...Show Less'` button has an event listener that fires a `toggleLength` function when clicked: 

```JavaScript
<button className="link" onClick={this.toggleLength}>
  {buttonText}
</button>
```

The `toggleLength` function has a conditional statement that checks the current text of the button. If the button says `'...Show More'`, its `buttonText` is changed to `'...Show Less'` and the description `body` is changed to its full length: 

```JavaScript
if (this.state.buttonText === '...Show More') {
  this.setState({
    buttonText: '...Show Less',
    body: this.props.body
  })
```

If the button says `'...Show Less'`, its `buttonText` is changed to `'...Show More'` and the description `body` is cut off at the specified `cutoffLength`: 

```JavaScript
} else {
  this.setState({
    buttonText: '...Show More',
    body: this.props.body.slice(0, this.props.cutoffLength)
  })
}
```

## TODO
* Users can create, edit, and delete checkins
* Each beer displays its average rating and checkin quantity
* Each beer has a show page displaying its stats and checkins
* Users can search for beers from the home page
