<template>
  <navbar></navbar>
  <div>
    <div class="container_1">
      <div>
        <project-unit-comp
          v-if="assetsReady"
          :asset-set="assetsReady"
        ></project-unit-comp>
      </div>

      <div>
        <work-details-comp
          v-if="assetsReady"
          :data-set="assetsReady"
        ></work-details-comp>
      </div>
    </div>

    <div class="container_2">
      <MoreDetailsComp v-if="assetsReady" :assetSet="assetsReady" />
    </div>

    <div class="container_3">
      <images-phone v-if="assetsReady" :assetSet="assetsReady"></images-phone>
    </div>
  </div>
</template>

<script>
import ProjectUnitComp from "@/components/my_work/projectUnitComp";
import WorkDetailsComp from "@/components/my_work/workDetailsComp";
import Navbar from "@/components/navbar/Navbar";
import sanity from "../client";
import imageUrlBuilder from "@sanity/image-url";
import MoreDetailsComp from "../components/my_work/moreDetailsComp.vue";
import ImagesPhone from "../components/my_work/imagesPhone.vue";

const imageBuilder = imageUrlBuilder(sanity);
const assetQuery = `*[slug.current == $slug] {_id, title, url, role, company, date, projectType, problemStatement,overview, "image": mainImage{asset->{_id,url}}, "imagePhone_1": phoneImage_1{asset->{_id, url}}}`;

export default {
  name: "projectView",
  components: {
    Navbar,
    WorkDetailsComp,
    ProjectUnitComp,
    MoreDetailsComp,
    ImagesPhone,
  },
  data() {
    return {
      assetsReady: null,
    };
  },
  computed: {},
  methods: {
    async theData() {
      try {
        const assetsReady = await sanity.fetch(assetQuery, {
          slug: this.$route.params.slug,
        });
        this.assetsReady = assetsReady[0];
      } catch (e) {
        console.log(e);
      }
    },
  },
  imageUrlFor(source) {
    return imageBuilder.image(source);
  },
  mounted() {
    this.theData();
    this.$route.params.slug;
  },
};
</script>

<style scoped>
.container_1 {
  display: flex;
  justify-content: space-between;
}
.container_2 {
  margin: 2rem;
}
.container_3 {
  margin: 2rem;
}
</style>
