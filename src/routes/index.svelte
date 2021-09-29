<script context="module">
    import RoomButton from "../components/roomButton.svelte"
    import apolloClient from "../graphql-client";
    import {queryRooms} from "../store/queries";

    export async function load() {
        const rooms = await apolloClient.query({
            query: queryRooms
        })

        return {
            props: {
                rooms
            }
        }
    }
</script>

<script>
    export let rooms
</script>

<div class="container">
    <h1>Chat Rooms</h1>

    {#each rooms.data.usersRooms.rooms as room}
        <RoomButton room={room}/>
    {/each}
</div>



<style>
    .container {
        width: 60%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
