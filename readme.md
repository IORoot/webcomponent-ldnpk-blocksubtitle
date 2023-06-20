# ldnpk-button WebComponent

This is a completely native javascript implementation of the component for the 
LondonParkour.com website. 
There are no dependencies for frameworks, react, vue, etc... and can be used
in any HTML page.

## How to use

You can load the javascript file like any normal javascript and then use the new 
tag on the page.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <ldnpk-blocksubtitle>
        <div slot="title">Title</div>
        <div slot="subheading">subtitle</div>
    </ldnpk-blocksubtitle>

    <script src="./blockTitle.js"></script>

</body>
</html>
```

## Storybook

You can use the `blockSubTitle.stories.js` file in storybook.js to dynamically describe 
the webcomponent.