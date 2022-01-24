source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.1.0'
gem 'rails', '~> 6.1.4', '>= 6.1.4.1'
gem 'pg', '~> 1.1'
gem 'puma', '~> 5.0'
gem 'sass-rails', '>= 6'
gem 'webpacker', '~> 5.0'
gem 'jbuilder', '~> 2.7'
gem 'gravtastic'
gem 'devise'
gem 'stimulus-rails'
gem 'better_errors'
gem 'turbo-rails'
gem 'hotwire-rails'
# gem 'cancancan'
gem 'bootsnap', '>= 1.4.4', require: false  
gem 'net-smtp', require: false

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'rubocop', require: false
  gem 'rubocop-rails', require: false
end

group :development do
  gem 'web-console', '>= 4.1.0'
  gem 'listen', '~> 3.3'
  gem 'spring'
  gem 'binding_of_caller'
end

# Use Redis for Action Cable
gem 'redis', '~> 4.0'
