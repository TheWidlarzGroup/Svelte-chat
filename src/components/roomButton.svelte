<script>
    export let room
</script>

<a href={`/room/${room.id}`} class="room-container">
    {#if room.roomPic}
        <img class="room-image" src={room.roomPic} alt={room.name}>
    {/if}
    <p class="room-name">{room.name}</p>
</a>

<style>
    .room-container {
        width: 70%;
        background-color: aliceblue;
        margin: 10px 0;
        border: 0.5px solid deepskyblue;
        border-radius: 80px;
        display: flex;
        padding: 10px;
        align-items: center;
        text-decoration: none;
    }

    .room-image {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-right: 20px;
    }

    .room-name {
        font-size: 20px;
        font-family: Arial;
    }
</style>
