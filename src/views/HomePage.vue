<template>
  <div class="home-page page">
    <app-scroll class="content">
      <Header/>
      <Banner/>
      <Handle/>
      <teacher-rec/>
      <course-rec/>
      <Public/>
      <News/>
    </app-scroll>
    <router-view/>
  </div>
</template>

<script>
import Header from '../components/home/header'
import Banner from '../components/home/banner'
import Handle from '../components/home/handle'
import TeacherRec from '../components/home/teacher-rec'
import CourseRec from '../components/home/course-rec'
import Public from '../components/home/public'
import News from '../components/home/news'
export default {
  components:{
    Header,
    Banner,
    Handle,
    TeacherRec,
    CourseRec,
    Public,
    News
  }
}
</script>

<style lang="scss" scoped>

</style>