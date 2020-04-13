# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-notes"
  spec.version       = "0.1.1"
  spec.authors       = ["AlexZ005"]
  spec.email         = ["alexz005.info@gmail.com"]

  spec.summary       = "jekyll-notes is a jekyll theme for taking notes, files and direcroties automatically gets generated in submenu."
  spec.homepage      = "https://github.com/AlexZ005/jekyll-notes/"
  spec.license       = "MIT"

  spec.metadata["plugin_type"] = "theme"

#  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.files = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r!^(assets|_(includes|layouts|sass)/|(LICENSE|README)((\.(txt|md|markdown)|$)))!i)
  end

  spec.add_runtime_dependency "jekyll", "~> 4.0"

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.9"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.1"

end
