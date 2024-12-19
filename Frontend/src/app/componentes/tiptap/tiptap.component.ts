import { Component, OnInit, OnDestroy } from '@angular/core';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import Color from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
// import { TiptapModule } from 'ngx-tiptap-editor';

import { NgIf } from '@angular/common';

@Component({
  selector: 'app-tiptap',
  standalone: true,
  imports: [NgIf],
  templateUrl: './tiptap.component.html',
  styleUrl: './tiptap.component.css'
})


export class TiptapComponent implements OnInit, OnDestroy {
  editor: Editor | null = null;

  ngOnInit() {
    this.editor = new Editor({
      extensions: [
        Color.configure({ types: [TextStyle.name, ListItem.name] }),
        // TextStyle.configure({ types: [ListItem.name]}),
        StarterKit,
      ],
      content: `
        <h2>Hi there,</h2>
        <p>
          this is a <em>basic</em> example of <strong>Tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
        </p>
        <ul>
          <li>
            That’s a bullet list with one …
          </li>
          <li>
            … or two list items.
          </li>
        </ul>
        <p>
          Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
        </p>
        <pre><code class="language-css">body {  display: none;}</code></pre>
        <p>
          I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
        </p>
        <blockquote>
          Wow, that’s amazing. Good work, boy! 
          <br />
          — Mom
        </blockquote>
      `,
    });
  }

  ngOnDestroy() {
    if (this.editor) {
      this.editor.destroy();
    }
  }
}
