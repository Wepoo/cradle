json.extract! @video, :id, :title, :url, :description
json.image @video.try(:image).try(:image).try(:url)
