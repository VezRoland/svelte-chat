<script>
    export let callback
</script>

<form on:submit|preventDefault={callback}>
    <input type="email" placeholder="Email address" name="email">
    <input type="password" name="Password">
    <button type="submit">Log in</button>
</form>