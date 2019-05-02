constructor(
  private activatedRoute: ActivatedRoute
) {}

ngOnInit() {
  this.activatedRoute.data.subscribe(({ offerLetterList }) => {
            this.offerLetterList = offerLetterList;
        });
}
