json.extract! @letter, :id, :position, :name, :consonant

json.words @letter.words, partial: 'words/word', as: :word