<script>
    import { ref, uploadBytes } from 'firebase/storage'
    import { storage, user } from '$lib/firebase'

    const storageRef = ref(storage, `${$user.uid}.jpg`)

    function handleUpload({ target }) {
        const data = new FormData(target)
        uploadBytes(storageRef, data.get('file')).then((snapshot) => {
            console.log('Uploaded a blob or a file!')
        })
    }
</script>

<form on:submit|preventDefault={handleUpload}>
    <input type="file" name="file">
    <button type="submit">Upload</button>
</form>