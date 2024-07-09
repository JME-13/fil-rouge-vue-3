<template>
     <div class="container">
            <img class="buttons-icon" alt="" src="https://i.postimg.cc/ZKX987vF/Iconfb.png">
    		<img class="buttons-icon2" alt="" src="https://i.postimg.cc/FHcYDyjt/Iconig.png">
			<div class="all-rights-reserved">All rights reserved © 2024</div>
        </div>
</template>

<script>
export default {
  name: 'MADBFooter'
}
</script>

<style scoped>
.container {
    width: 95%;
}

.buttons-icon {
    margin-top: 10%;
    margin-left: 140px;
}

.buttons-icon2 {
    margin-top: 10%;
}

.all-rights-reserved {
    margin-top: 5%;
    text-align: center;
    padding-bottom: 10%;
    color: #fff;
    font-weight: bold;
}

@media screen and (min-width: 600px){
    .buttons-icon {
        margin-top: 10%;
        margin-left: 220px;
    }
    
    .buttons-icon2 {
        margin-top: 10%;
    }
}

@media screen and (min-width: 800px){
  
    .buttons-icon {
        margin-top: 10%;
        margin-left: 310px;
    }
    
    .buttons-icon2 {
        margin-top: 10%;
    }

}

@media screen and (min-width: 1300px){

    .buttons-icon {
        margin-top: 5%;
        margin-left: 47%;
    }
    
    .buttons-icon2 {
        margin-top: 5%;
    }
    
    .all-rights-reserved {
        margin-top: 2%;
        padding-bottom: 5%;
    }
}

</style>