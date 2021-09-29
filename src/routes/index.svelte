<script>
    import RoomButton from "../components/roomButton.svelte";
    import {queryRooms} from "../store/queries";
    import apolloClient from '../graphql-client'

    let firstRoom;

    const downloadChatRooms = async () => {
        const rooms = await apolloClient.query({
            query: queryRooms
        })
        const roomsData = await rooms.data
        firstRoom = roomsData.usersRooms.rooms[0]

        return rooms
    }

    $: console.log(firstRoom)

    const data = downloadChatRooms()

</script>



<div class="container">
    <h1>Chat Rooms</h1>

    {#await data}
        <p> </p>
    {:then { data }}
        {#each data.usersRooms.rooms as room}
            <RoomButton room={room}/>
        {/each}
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
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
