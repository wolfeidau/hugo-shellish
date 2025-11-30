---
title: "{{ .Title }}"
date: {{ .Date.Format "2006-01-02" }}
{{ if .Params.tags }}tags: {{ range .Params.tags }}{{ . }} {{ end }}{{ end }}
{{ if .Description }}description: "{{ .Description }}"{{ end }}
---

{{ .RawContent }}
