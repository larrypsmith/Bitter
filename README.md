[Bitter Home Page](https://bitterapp.herokuapp.com/#/)

![home-page](https://user-images.githubusercontent.com/55966501/81262215-3dce2880-8ff2-11ea-895f-50f019f92a0e.png)

# Bitter 

Bitter is a clone of [Untappd](https://untappd.com/), a social media app where users review and discuss beer.
When drinking a beer, a user posts a review, or `checkin`, and rates the beer between one and five points.

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

### Snackbars

When a user creates, changes, or deletes a `Checkin` or `List`, a brief message, or `Snackbar`, appears at the bottom left of the screen. A CSS transition draws the user's attention to the `Snackbar`:

![feedback-notification](https://user-images.githubusercontent.com/55966501/81263643-e67d8780-8ff4-11ea-985a-0b87c0a66e44.gif)

The `Snackbar`'s position is fixed and a high z-index places it above all other components. It's default height is 0px, making it invisible: 

```CSS
.Snackbar {
  position: fixed;
  background-color: $yellow;
  min-width: 400px;
  left: 30px;
  bottom: 30px;
  border-radius: 3px;
  box-shadow: 0 2px 2px -2px $light-gray;
  margin: auto;
  z-index: 200;
  height: 0px;
  padding: 0 1em;
  transition: height .3s;
  transition: padding .3s;
}
```

When the backend server sends a response as the result of a `CRUD` action, an `openSnackbar` action is dispatched alongside it. The `openSnackbar` action takes a message as an argument and adds it to the Redux state:

```JavaScript
export const createCheckin = checkin => dispatch => (CheckinAPIUtil.createCheckin(checkin))
  .then(payload => {
    dispatch(receiveCheckin(payload));
    dispatch(openSnackbar('Checkin created!'));
  });
```

The `Snackbar` component listens to the corresponding slice of Redux state:

```JavaScript
const Snackbar = () => {
  const message = useSelector(state => state.ui.snackbar);
```

When a new message is detected, an `opened` class is added to the component, setting its `height` to `auto` and making it visible:

```JavaScript
let opened = message ? 'opened' : '';

  return(
    <div className={`Snackbar ${opened}`}>
      <Typography size="md" color="white">
        {message}
      </Typography>
    </div>
  )
```

```CSS
.Snackbar.opened {
  height: auto;
  padding: 1em;
}
```

A three-second timer is started, after which an action is dispatched to close the `Snackbar`:

```JavaScript
useEffect(() => {
    if (message) {
      setTimeout(() => dispatch(closeSnackbar()), 3000);
    }
  }, [message, dispatch])
```


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

Each brewery and beer has a description. Many descriptions exceed 1000 characters. To reduce the amount of space it occupies on the page, each description is initially rendered as only its first 120 characters. A `'...Show More'` button can be clicked to expand the description to it's full length:

![description](https://user-images.githubusercontent.com/55966501/76646151-b8f5ef80-6517-11ea-99ec-29c634a91e6b.png)

Once the full description is rendered, a `'...Show Less'` button can be clicked to shorten it again:

![description-long](https://user-images.githubusercontent.com/55966501/76646470-40dbf980-6518-11ea-9757-61893fc13deb.png)

The `'...Show More'`/`'...Show Less'` button has an event listener that fires a `toggleLength` function when clicked: 

```JavaScript
<button className="link" onClick={toggleLength}>
  {buttonText}
</button>
```

The `toggleLength` function has a conditional statement that checks the current text of the button. If the button says `'...Show More'`, its `buttonText` is set to `'...Show Less'` and the description `body` is changed to its full length: 

```JavaScript
if (buttonText === '...Show More') {
  setButtonText('...Show Less');
  setBody(initialBody);
}
```

If the button says `'...Show Less'`, its `buttonText` is set to `'...Show More'` and the description `body` is set to its shortened version: 

```JavaScript
else {
  setButtonText('...Show More');
  setBody(shortenedBody);
}
```

## TODO
* Each beer displays its average rating and checkin quantity
* Each beer has a show page displaying its stats and checkins
* Users can search for beers from the home page