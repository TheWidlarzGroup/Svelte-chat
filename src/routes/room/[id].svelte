<script context="module">
    import Input from "../../components/input.svelte";
    import apolloClient from "../../graphql-client";
    import {queryRoom} from "../../store/queries";

    export async function load({page}) {
        const id = page.params.id
        const chatRoom = await apolloClient.query({
            query: queryRoom,
            variables: {id}
        })

        return {
            props: {
                chatRoom
            }
        }
    }
</script>

<script>
    export let chatRoom
    console.log(chatRoom)
</script>

<div class="messages">
    {#each chatRoom.data.room.messages as message}
        {#if message.user.email === "chandler@mail.com"}
            <p class="my-message">{message.body}</p>
        {:else}
            <p class="message">{message.body}</p>
        {/if}
    {/each}
    <Input roomId={chatRoom.data.room.id}/>
</div>



<style>
    .messages {
        width: 40%;
        height: auto;
        min-height: 95vh;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        overflow: scroll;
        align-items: center;
        padding-bottom: 20px;
        padding-left: 25px;
        padding-right: 25px;
    }
    .my-message {
        align-self: flex-end;
        background-color: #D3D3D3;
        padding: 15px;
        margin-bottom: 1px;
        border-radius: 13px;
        border-bottom-right-radius: 0;
        max-width: 65%;
        color: black;
    }
    .message {
        align-self: flex-start;
        background-color: #1E90FF;
        padding: 15px;
        margin-bottom: 1px;
        border-radius: 13px;
        border-bottom-left-radius: 0;
        max-width: 65%;
        color: white;
    }
</style>
