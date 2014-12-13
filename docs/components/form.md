## Forms

### Horizontal form

```html
<form class="form">

    <div class="form group">
        <label class="col-2">Name:</label>
        <div class="col-10">
            <input type="text" class="form-control">
        </div>
    </div>

    <div class="form group">
        <label class="input col-2">Email:</label>
        <div class="col-10">
            <input type="email" class="form-control">
        </div>
    </div>

</form>
```
<div class="code-example">

</div>

### Inline form

```html
<form class="form">

    <div class="form inline">

        <div class="form group">
            <label>Username:</label>
            <input type="text" class="form-control">
        </div>

        <div class="form group">
            <label>Passowrd:</label>
            <input type="password" class="form-control">
        </div>

        <div class="form group">
            <button>
                Log in
            </button>
        </div>

    </div>

</form>
```