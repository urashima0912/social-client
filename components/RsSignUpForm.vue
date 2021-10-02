<template>
  <div class="rs-sign-up-form mt-4">
    <v-row>
      <v-col class="col-md-6 offset-md-3">
        <v-card>
          <v-card-title class="d-flex justify-center">
            <p>Sign Up</p>
          </v-card-title>
          <v-card-text>
            <v-file-input placeholder="avatar" outlined prepend-icon="" />
            <v-text-field placeholder="email" outlined></v-text-field>
            <v-text-field
              placeholder="password"
              type="password"
              outlined
            ></v-text-field>
            <v-text-field
              placeholder="Repeat password"
              type="password"
              outlined
            ></v-text-field>
            <v-btn color="success" block>Submit</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
