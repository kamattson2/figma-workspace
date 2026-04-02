import figma, { html } from '@figma/code-connect';

// Text field — MD3 "Text field" component (node 43:2126, componentId 43:861)
// Maps to Angular Material mat-form-field with matInput
figma.connect(
  'https://www.figma.com/design/xkUdEjK1H5bHSMG6GTFtsm/POCDesign?node-id=43-861',
  {
    props: {
      label: figma.string('Label text#52808:484'),
      hint: figma.boolean('Show supporting text#52051:0', {
        true: html`<mat-hint>Supporting text</mat-hint>`,
        false: html``,
      }),
      appearance: figma.enum('Style', {
        Filled: 'fill',
        Outlined: 'outline',
      }),
      trailingIcon: figma.enum('Trailing icon', {
        True: html`
          <button matSuffix mat-icon-button aria-label="Clear">
            <mat-icon>cancel</mat-icon>
          </button>
        `,
        False: html``,
      }),
    },
    example: ({ label, hint, appearance, trailingIcon }) => html`
      <mat-form-field appearance="${appearance}">
        <mat-label>${label}</mat-label>
        <input matInput />
        ${trailingIcon}
        ${hint}
      </mat-form-field>
    `,
  }
);

// Divider with subheader — MD3 "Horizontal/Divider with subhead" (node 43:3162)
figma.connect(
  'https://www.figma.com/design/xkUdEjK1H5bHSMG6GTFtsm/POCDesign?node-id=43-3162',
  {
    props: {
      label: figma.string('Subheader'),
    },
    example: ({ label }) => html`
      <div class="section-header">
        <mat-divider></mat-divider>
        <span class="section-label">${label}</span>
      </div>
    `,
  }
);

// Segmented button (end segment) — MD3 "Button segment (end)" (node 43:3210)
// Maps to mat-flat-button styled as a segmented button end
figma.connect(
  'https://www.figma.com/design/xkUdEjK1H5bHSMG6GTFtsm/POCDesign?node-id=43-3210',
  {
    props: {
      label: figma.string('Label text#53923:692'),
    },
    example: ({ label }) => html`
      <button mat-flat-button class="submit-btn" type="button">
        <mat-icon>check</mat-icon>
        ${label}
      </button>
    `,
  }
);

// Button group / connected segment — MD3 "Connected segments/Medium" (node 43:3330)
// Maps to mat-flat-button styled as a chip/group button
figma.connect(
  'https://www.figma.com/design/xkUdEjK1H5bHSMG6GTFtsm/POCDesign?node-id=43-3330',
  {
    props: {
      label: figma.string('Label text#19551:0'),
      showIcon: figma.boolean('Show icon#27991:44', {
        true: html`<mat-icon aria-hidden="true">settings</mat-icon>`,
        false: html``,
      }),
    },
    example: ({ label, showIcon }) => html`
      <button mat-flat-button class="name-btn" type="button">
        ${showIcon}
        ${label}
      </button>
    `,
  }
);
