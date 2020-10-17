nx g @nrwl/angular:app desktop --directory booking --routing --style scss --prefix web

nx g @nrwl/angular:app mobile --directory booking --routing --style scss --prefix app

nx g @nrwl/angular:lib feature-shell --directory booking --prefix=booking --style scss --routing --lazy --parentModule=apps/booking/mobile/src/app/app.module.ts

nx g @nrwl/angular:lib data-access --directory booking --no-interactive


nx g @nrwl/angular:app desktop --directory check-in --routing --style scss --prefix web

nx g @nrwl/angular:app mobile --directory check-in --routing --style scss --prefix app

nx g @nrwl/angular:lib feature-shell --directory check-in --prefix=check-in --style scss --routing --lazy --parentModule=apps/check-in/mobile/src/app/app.module.ts

nx g @nrwl/angular:lib data-access --directory check-in --no-interactive

nx g @nrwl/angular:lib data-access --directory shared --no-interactive

nx g @nrwl/angular:lib feature-seatmap --directory shared/seatmap --prefix=seatmap --style scss --routing --parentModule=libs/check-in/feature-shell/src/lib/check-in-feature-shell.module.ts

nx g @nrwl/angular:lib data-access --directory shared/seatmap --no-interactive
