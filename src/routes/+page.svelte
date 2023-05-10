<script>
    import { firestore, user } from '$lib/firebase'
    import { collection, query, orderBy, onSnapshot, addDoc } from "firebase/firestore";
    import '@unocss/reset/tailwind.css'
    import 'uno.css'

    let msgList = []


    const q = query(collection(firestore, "messages"), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        msgList = []
        querySnapshot.forEach((d) => {
            msgList = [...msgList, d.data()]
        })
    });

    function sendMessage(e) {
        const data = new FormData(e.target)
        addDoc(collection(firestore, 'messages'), {
            sender: $user.uid, content: data.get('msg'), timestamp: Date.now()
        })
    }
</script>

<main class="w-screen h-screen md:max-w-3xl flex flex-col bg-zinc-900">
    <ul class="flex-1 p-5 text-white overflow-x-auto">
        {#each msgList as msg}
            <li class="p-5 my-3 b b-zinc-700 rounded-md">
                <h4 class="text-cyan-500 font-bold">{msg.sender}</h4>
                <p class="pl-4">{msg.content}</p>
            </li> 
        {/each}
    </ul>
    <form class="flex" on:submit|preventDefault={sendMessage}>
        <input class="flex-1 p-2 bg-zinc-600" type="text" name="msg" placeholder="message">
        <button class="p-2 px-5 bg-sky-500" type="submit">Send</button>
    </form>
</main>
