5.times do |i|
  Post.create(title: "Post_#{i}")
end
5.times do |i|
  Video.create(title: "Video_#{i}", url: "Url#{i}")
end
