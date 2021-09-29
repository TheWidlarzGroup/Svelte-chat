<script context="module">
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
</script>

<div class="messages">
    {#each chatRoom.data.room.messages as message}
        {#if message.user.email === "chandler@mail.com"}
            <p class="my-message">{message.body}</p>
        {:else}
            <p class="message">{message.body}</p>
        {/if}
    {/each}
</div>

<style>
    .messages {
        width: 40%;
        height: auto;
        min-height: 90vh;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        overflow: scroll;
    }
    .my-message {
        align-self: flex-end;
        background-color: #D3D3D3;
        padding: 15px;
        margin-bottom: 1px;
        border-radius: 13px;
        margin-right: 25px;
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
        margin-left: 25px;
        border-bottom-left-radius: 0;
        max-width: 65%;
        color: white;
    }
</style>
