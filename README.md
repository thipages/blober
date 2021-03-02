# blober
Browser FileReader helper

## Example

```javascript

<input id="file_input" type="file" />   
<script type="module">
    import blober from 'index.js';
    file_input.addEventListener(
        'change',
        ()=>blober(
            file_input, // or file_input.files[0]
            ({header,body,error,file})=>console.log(header,body,error,file)
        )
    );
</script>
```
