<template>
  <div class="container">
    <div class="col s12 m8 l4">
      <div class="card bluePerso">
        <div class="card-content white-text">
          <span class="card-title">Ajouter un article</span>
          <AddArticleForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddArticleForm from "@/components/AddArticleForm";

export default {
  name: "AddArticle",
  components: {
    AddArticleForm
  },
};
</script>

<style scoped>
.container{
  width: 50%;
}

.bluePerso{
  background-color: #1e56a0;
}
</style>