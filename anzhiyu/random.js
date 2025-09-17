var posts=["2025/08/29/Redis和Mysql数据一致性/","2025/09/17/消息队列是什么/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };