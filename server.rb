require 'sinatra'

before do
  headers 'Access-Control-Allow-Origin' => '*'
end

get '/now' do
  Time.now.to_s
end

post '/temperature' do
  Temperature.update(params[:current_temp])
end

get '/temperature' do
  Temperature.get
end

class Temperature

  def self.update(newtemp)
    @temp = newtemp
  end

  def self.get()
    @temp
  end

end
