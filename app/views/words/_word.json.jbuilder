json.extract! word, :id, :name
json.image { json.image word.try(:image).try(:image).try(:url) }
