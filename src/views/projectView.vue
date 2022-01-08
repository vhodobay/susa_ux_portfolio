<template>
  <navbar @contact-me="contactMeStart" @scroll-to-about="pushToAbout"
          @scroll-to-top="null"
          @scroll-to-work="pushToMyWork"
  ></navbar>
  <contact-me :clicked="contactMe" @close-contact-me="contactMeStart"></contact-me>
  <div class="container_1">
    <div>
      <project-unit-comp
          v-if="assetsReady"
          :asset-set="assetsReady"
      ></project-unit-comp>
    </div>

    <div>
      <work-details-comp v-if="assetsReady" :data-set="assetsReady">
      </work-details-comp>
    </div>
  </div>

  <div class="container_2">
    <more-details-comp
        v-if="assetsReady && assetsReady.overView && assetsReady.problemStatement"
        title1="Overview"
        title2="Problem Statement"
        :text1="assetsReady.overview"
        :text2="assetsReady.problemStatement"
    >
    </more-details-comp>
  </div>

  <div v-if="assetsReady && assetsReady.desktopImage_1 && assetsReady.desktopImage_2" class="container_3">
    <laptops-images :image_1="assetsReady.desktopImage_1" :image_2="assetsReady.desktopImage_2"></laptops-images>
  </div>

  <div class="container_3">
    <images-phone
        v-if="assetsReady && assetsReady.imagePhone_1 && assetsReady.imagePhone_2 && assetsReady.imagePhone_3"
        :image_1="assetsReady.imagePhone_1"
        :image_2="assetsReady.imagePhone_2"
        :image_3="assetsReady.imagePhone_3"
        color="yellow"
    >
    </images-phone>
  </div>

  <div class="container_2">
    <more-details-comp
        v-if="assetsReady && assetsReady.process && assetsReady. outcomes"
        title1="Process"
        title2="Outcomes"
        :text1="assetsReady.process"
        :text2="assetsReady.outcomes"
    >
    </more-details-comp>
  </div>

  <div class="container_3">
    <images-phone
        v-if="assetsReady && assetsReady.imagePhone_4 && assetsReady.imagePhone_5 && assetsReady.imagePhone_6"
        :image_1="assetsReady.imagePhone_4"
        :image_2="assetsReady.imagePhone_5"
        :image_3="assetsReady.imagePhone_6"
        color="blue"
    >
    </images-phone>
  </div>

</template>

<script>
import ProjectUnitComp from "@/components/my_work/projectUnitComp";
import WorkDetailsComp from "@/components/my_work/workDetailsComp";
import Navbar from "@/components/navbar/Navbar";
import sanity from "../client";
import imageUrlBuilder from "@sanity/image-url";
import MoreDetailsComp from "@/components/my_work/moreDetailsComp.vue";
import ImagesPhone from "@/components/my_work/imagesPhone.vue";
import ContactMe from "@/components/contactMe";
import LaptopsImages from "@/components/my_work/laptopsImages";


const imageBuilder = imageUrlBuilder(sanity);
const assetQuery = `*[slug.current == $slug] {_id, title, url, role, company, date, projectType, problemStatement, overview, process, outcomes,
 "image": mainImage{asset->{_id,url}},
 "imagePhone_1": phoneImage_1{asset->{_id, url}},
 "imagePhone_2": phoneImage_2{asset->{_id, url}},
 "imagePhone_3": phoneImage_3{asset->{_id, url}},
 "imagePhone_4": phoneImage_4{asset->{_id, url}},
 "imagePhone_5": phoneImage_5{asset->{_id, url}},
 "imagePhone_6": phoneImage_6{asset->{_id, url}},
 "desktopImage_1": desktopImage_1{asset->{_id, url}},
 "desktopImage_2": desktopImage_2{asset->{_id, url}},
 }`;

export default {
  name: "projectView",
  components: {
    LaptopsImages,
    ContactMe,
    Navbar,
    WorkDetailsComp,
    ProjectUnitComp,
    MoreDetailsComp,
    ImagesPhone,
  },
  data() {
    return {
      assetsReady: null,
      contactMe: false,
    };
  },
  computed: {},
  methods: {
    contactMeStart() {
      this.contactMe = !this.contactMe

    },
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
    pushToAbout() {
      this.$router.push('/')
    },
    pushToMyWork() {
      this.$router.push('/')
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
