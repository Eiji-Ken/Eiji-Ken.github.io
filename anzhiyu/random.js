var posts=["2025/08/20/Redis和Mysql数据一致性/","2025/08/15/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };