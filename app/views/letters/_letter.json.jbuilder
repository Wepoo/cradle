json.extract! letter, :id, :position, :name

unless letter.words.length == 0
  json.major_word do
    json.name letter.words.first.name
    json.image letter.words.first.try(:image).try(:image).try(:url)
  end
end
