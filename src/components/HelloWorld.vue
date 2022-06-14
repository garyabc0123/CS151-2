<template>
  <v-app id="inspire">
    <v-app-bar
        app
        color="white"
        flat
    >
      <!--      圖標-->
      <v-container class="py-0 fill-height">
        <v-avatar
            class="mr-10"
            color="grey darken-1"
            size="32"
        >
          <img

              alt="Avatar"
              src="https://e.ecimg.tw/img/icon/24-32x32.ico"
          >
        </v-avatar>

        <!--        留白-->
        <v-spacer></v-spacer>
        <!--        搜索框-->
        <v-responsive max-width="260">
          <v-text-field
              dense
              flat
              hide-details
              rounded
              solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <!--          left-->
          <v-col cols="3">
            <v-sheet rounded="lg">
              <v-list rounded>
                <v-list-item-group
                    v-model="model"
                    multiple
                >
                  <template v-for="(item, i) in diskType">
                    <v-divider
                        v-if="!item"
                        :key="`divider-${i}`"
                    ></v-divider>

                    <v-list-item
                        v-else
                        :key="`item-${i}`"
                        :value="item"
                        active-class="deep-purple--text text--accent-4"
                    >
                      <template v-slot:default="{ active }">
                        <v-list-item-content>
                          <v-list-item-title v-text="item"></v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-action>
                          <v-checkbox
                              :input-value="active"
                              color="deep-purple accent-4"
                          ></v-checkbox>
                        </v-list-item-action>
                      </template>
                    </v-list-item>
                  </template>
                </v-list-item-group>


              </v-list>


            </v-sheet>
          </v-col>















          <!--          right-->

          <v-col>
            <v-sheet
                min-height="70vh"
                rounded="lg"
            >
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    diskType: [
      '3.5吋機械硬碟',
      '2.5吋機械硬碟',
      '2.5吋固態硬碟',
      'Gen3 固態硬碟',
      'Gen4 固態硬碟'
    ],
  }),
}
</script>
