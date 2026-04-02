import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly inputText = signal('');
  readonly submittedName = signal('');
  readonly listItems = signal([
    { label: 'Label text', shortcut: '⌘C' },
    { label: 'Label text', shortcut: '⌘C' },
    { label: 'Label text', shortcut: '⌘C' },
    { label: 'Label text', shortcut: '⌘C' },
    { label: 'Label text', shortcut: '⌘C' },
    { label: 'Label text', shortcut: '⌘C' },
  ]);

  onInput(event: Event): void {
    this.inputText.set((event.target as HTMLInputElement).value);
  }

  clearInput(): void {
    this.inputText.set('');
  }

  onSubmit(): void {
    const name = this.inputText().trim();
    if (!name) return;
    this.submittedName.set(name);
    this.inputText.set('');
  }
}
