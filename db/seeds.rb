5.times do |i|
  Post.create(title: "Post_#{i}")
end
5.times do |i|
  Video.create(title: "Video_#{i}", url: "Url#{i}")
end

letters = [
  { position: 1, name: 'А', consonant: false },
  { position: 2, name: 'Б', consonant: true },
  { position: 3, name: 'В', consonant: true },
  { position: 4, name: 'Г', consonant: true },
  { position: 5, name: 'Д', consonant: true },
  { position: 6, name: 'Е', consonant: false },
  { position: 7, name: 'Ё', consonant: false },
  { position: 8, name: 'Ж', consonant: true },
  { position: 9, name: 'З', consonant: true },
  { position: 10, name:  'И', consonant: false },
  { position: 11, name:  'Й', consonant: true },
  { position: 12, name:  'К', consonant: true },
  { position: 13, name:  'Л', consonant: true },
  { position: 14, name:  'М', consonant: true },
  { position: 15, name:  'Н', consonant: true },
  { position: 16, name:  'О', consonant: false },
  { position: 17, name:  'П', consonant: true },
  { position: 18, name:  'Р', consonant: true },
  { position: 19, name:  'С', consonant: true },
  { position: 20, name:  'Т', consonant: true },
  { position: 21, name:  'У', consonant: false },
  { position: 22, name:  'Ф', consonant: true },
  { position: 23, name:  'Х', consonant: true },
  { position: 24, name:  'Ц', consonant: true },
  { position: 25, name:  'Ч', consonant: true },
  { position: 26, name:  'Ш', consonant: true },
  { position: 27, name:  'Щ', consonant: true },
  { position: 28, name:  'Ъ', consonant: true },
  { position: 29, name:  'Ы', consonant: false },
  { position: 30, name:  'Ь', consonant: true },
  { position: 31, name:  'Э', consonant: false },
  { position: 32, name:  'Ю', consonant: false },
  { position: 33, name:  'Я', consonant: false }
]

letters.each do |letter|
  Letter.create(name: letter[:name], position: letter[:position], consonant: letter[:consonant]) unless Letter.find_by(name: letter[:name])
end
