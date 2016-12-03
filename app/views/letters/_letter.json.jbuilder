json.extract! letter, :id, :position, :name

unless letter.words.length == 0
  json.major_word do
    json.name letter.words.first.name
  end
end
