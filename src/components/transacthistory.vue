<template>
  <v-app>
    <v-container class="text-xs-center pa-0 container">
      <v-layout row wrap class="layout">
        <v-flex class="parentflex" lg10 offset-lg2 md10 offset-md2 sm10 offset-sm2 xs12>
          <v-card flat class="titlecard">
            <v-card-title primary-title>
              TRANSACTION HISTORY
            </v-card-title>
          </v-card>
          <!-- Transact Slip(Add 1 everytime a transaction is done) -->
          <v-layout row wrap mt-5>
            <v-flex lg5 md5 sm5 xs12 class="one" pl-4 pt-4 pb-4>
              Package Ka Chotta Sa Naam
            </v-flex>
            <v-flex lg2 md2 sm2 xs12 class="two" pt-4 pb-4>
              ₹ Paaisaa
            </v-flex>
            <v-flex lg2 md2 sm2 xs12 class="three" pt-3 pb-4>
              Maut ki Tareekh<br>
              <a href="#">Get Email</a>
            </v-flex>
            <v-flex lg3 md3 sm3 xs12 class="four" pt-4 pb-4>
              Mera Haafta Biduuu!!
            </v-flex>
          </v-layout>
          <!-- Transact Slip -->
          <v-layout row wrap mt-4>
            <v-flex lg5 md5 sm5 xs12 class="one" pl-4 pt-4 pb-4>
              Package Ka Chotta Sa Naam
            </v-flex>
            <v-flex lg2 md2 sm2 xs12 class="two" pt-4 pb-4>
              ₹ Paaisaa
            </v-flex>
            <v-flex lg2 md2 sm2 xs12 class="three" pt-3 pb-4>
              Maut ki Tareekh<br>
              <a href="#">Get Email</a>
            </v-flex>
            <v-flex lg3 md3 sm3 xs12 class="four" pt-4 pb-4>
              Mera Haafta Biduuu!!
            </v-flex>
          </v-layout>
          <!-- Transact Slip (Basically This Code Must be Executed when A new Transaction Slip is to be displayed)-->
          <v-layout row wrap mt-4 mb-4>
            <v-flex lg5 md5 sm5 xs12 class="one" pl-4 pt-4 pb-4>
              Package Ka Chotta Sa Naam
            </v-flex>
            <v-flex lg2 md2 sm2 xs12 class="two" pt-4 pb-4>
              ₹ Paaisaa
            </v-flex>
            <v-flex lg2 md2 sm2 xs12 class="three" pt-3 pb-4>
              Maut ki Tareekh<br>
              <a href="#">Get Email</a>
            </v-flex>
            <v-flex lg3 md3 sm3 xs12 class="four" pt-4 pb-4>
              Mera Haafta Biduuu!!
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'transacthistory',
}
</script>

<style scoped>
.container{
  font-family: 'Open Sans', arial, Verdana, Tahoma, sans-serif;
}
.parentflex{
  border: solid lightgray 1px;
  background-color: #f0f0f0;
  padding-left: 5px;
  padding-right: 5px;
} 
.titlecard{
  font-size: 20px;
  background-color: deepskyblue;
  color: white;
  margin-left: -5px;
  margin-right: -5px;
}
.one{
  border-top: solid lightgray 1px;
  border-bottom: solid lightgray 1px;
  border-left: solid lightgray 1px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  font-size: 16px;
  font-weight: 550;
  display: flex;
  background-color: white;
  color: #373a3c;
}
.two{
  border-top: solid lightgray 1px;
  border-bottom: solid lightgray 1px;
  font-size: 14px;
  background-color: white;
  color: #373a3c;
}
.three{
  border-top: solid lightgray 1px;
  border-bottom: solid lightgray 1px;
  text-align: center;
  font-size: 14px;
  background-color: white;
  color: #373a3c;
}
.four{
  border-top: solid lightgray 1px;
  border-bottom: solid lightgray 1px;
  border-right: solid lightgray 1px;
  font-size: 14px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: white;
  color: #373a3c;
}
@media only screen and (max-width: 600px) {
    [class*="titlecard"] {
        margin-left: -5px;
        margin-right: -5px;
    }
    [class*="one"] {
        border: solid lightgray 1px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border-bottom-left-radius: 0px;
    }
    [class*="two"] {
        border-top: solid white 1px;
        border-bottom: solid white 1px;
        border-left: solid lightgray 1px;
        border-right: solid lightgray 1px;
        display: flex;
        padding-left: 30px;
    }
    [class*="three"] {
      border-top: solid white 1px;
        border-bottom: solid white 1px;
        border-left: solid lightgray 1px;
        border-right: solid lightgray 1px;
        padding-left: 30px;
        text-align: left;
    }
    [class*="four"] {
        border-top: solid white 1px;
        border-bottom: solid lightgray 1px;
        border-left: solid lightgray 1px;
        border-right: solid lightgray 1px;
        display: flex;
        padding-left: 30px;
        border-top-right-radius: 0px;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }
}
</style>
	