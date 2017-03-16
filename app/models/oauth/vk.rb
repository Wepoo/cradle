module Oauth
  class Vk < Oauth::Base
    ACCESS_TOKEN_URL = 'https://oauth.vk.com/access_token'.freeze
    DATA_URL = 'https://api.vk.com/method/users.get'.freeze

    def get_data
      response = @client.get(DATA_URL, access_token: @access_token, fields: 'photo_max', scope: 'email', response_type: 'code', v: 5.53)
      @data = JSON.parse(response.body).with_indifferent_access
      @uid = @data[:id] ||= @data[:sub]
      @data[:email] = @email
      @data
    end

    def formatted_user_data
      vk_data = @data['response'][0]
      user_data = {
        provider:       'vk',
        token:          @access_token,
        uid:            vk_data['id'],
        first_name:     vk_data['first_name'],
        last_name:      vk_data['last_name'],
        email:          @data['email']
      }
      user_data[:image_url] = vk_data['photo_max'] if vk_data['photo_max']
      user_data
    end
  end
end
