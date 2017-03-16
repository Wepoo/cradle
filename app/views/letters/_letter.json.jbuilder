json.extract! letter, :id, :position, :name, :consonant

unless letter.words.length == 0
  word = letter.words.order("RANDOM()").first
  json.major_word do
    json.name word.name
    json.image word.try(:image).try(:image).try(:url)
  end
end
