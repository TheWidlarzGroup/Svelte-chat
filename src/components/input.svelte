<script>
    export let roomId;
    import {mutationNewMessage} from "../store/mutations";
    import {mutation, setClient} from "svelte-apollo";
    import apolloClient from "../graphql-client";
    let body = ''

    setClient(apolloClient)
    const addMessage = mutation(mutationNewMessage);

    const sendMessage = async () => {
        try {
            await addMessage({ variables: { body, roomId } });
            body = ''
        } catch (error) {
            console.log(error)
        }
    }

</script>

<div>
    <input type="text" bind:value={body}>
    <button on:click|preventDefault={sendMessage}>SEND</button>
</div>

<style>
    div {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        padding: 10px 0;
    }
    input {
        width: 100%;
        margin: 30px 25px;
        height: 40px;
        font-size: 15px;
        border: 3px solid rgba(120, 120, 120, 0.4);
        border-radius: 10px;
    }
    input:focus{
        outline: none;
    }
    button {
        height: 40px;
        width: 20%;
        background-color: rgba(120, 120, 120, 0.4);
    }
</style>
