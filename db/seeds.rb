5.times do |i|
  Post.create(title: "Post_#{i}")
end
5.times do |i|
  Video.create(title: "Video_#{i}", url: "Url#{i}")
end

letters = [
  { position: 1, name: 'А' },
  { position: 2, name: 'Б' },
  { position: 3, name: 'В' },
  { position: 4, name: 'Г' },
  { position: 5, name: 'Д' },
  { position: 6, name: 'Е' },
  { position: 7, name: 'Ё' },
  { position: 8, name: 'Ж' },
  { position: 9, name: 'З' },
  { position: 10, name:  'И' },
  { position: 11, name:  'Й' },
  { position: 12, name:  'К' },
  { position: 13, name:  'Л' },
  { position: 14, name:  'М' },
  { position: 15, name:  'Н' },
  { position: 16, name:  'О' },
  { position: 17, name:  'П' },
  { position: 18, name:  'Р' },
  { position: 19, name:  'С' },
  { position: 20, name:  'Т' },
  { position: 21, name:  'У' },
  { position: 22, name:  'Ф' },
  { position: 23, name:  'Х' },
  { position: 24, name:  'Ц' },
  { position: 25, name:  'Ч' },
  { position: 26, name:  'Ш' },
  { position: 27, name:  'Щ' },
  { position: 28, name:  'Ъ' },
  { position: 29, name:  'Ы' },
  { position: 30, name:  'Ь' },
  { position: 31, name:  'Э' },
  { position: 32, name:  'Ю' },
  { position: 33, name:  'Я' }
]

letters.each do |letter|
  Letter.create(name: letter[:name], position: letter[:position]) unless Letter.find_by(name: letter[:name])
end
