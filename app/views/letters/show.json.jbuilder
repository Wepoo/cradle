json.extract! @letter, :id, :position, :name

json.words @letter.words, partial: 'words/word', as: :word