require 'sass-globbing'

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
["the_eighties", "the_nineties", "the_two_thousands", "the_twenty_tens"].each do |decade|
  proxy "/#{decade.gsub('_', '-')}.html", "/decade.html", locals: { }

  data.send(decade).albums.each do |key, album|
    proxy "/#{decade.gsub('_', '-')}/#{album.title.downcase}.html", "/album.html", locals: { album: album }
  end
end

# General configuration
activate :sprockets
activate :directory_indexes

config[:js_dir] = 'assets/javascripts'
config[:css_dir] = 'assets/stylesheets'
config[:fonts_dir] = 'assets/fonts'
config[:images_dir] = 'assets/images'

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

###
# Helpers
###

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Use relative URLs
  activate :relative_assets
end
