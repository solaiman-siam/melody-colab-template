(function ($) {
  "use strict";

  $(document).ready(function () {
    // handleMegaMenu
    function handleMegaMenu() {
      let trigger = document.querySelector(".mengamenu");
      let dropdown = document.querySelector(".dropdown--megamenu");

      if (trigger) {
        trigger.addEventListener("mouseenter", function () {
          dropdown.classList.add("show");
        });

        trigger.addEventListener("mouseleave", function () {
          dropdown.classList.remove("show");
        });

        dropdown.addEventListener("mouseenter", function () {
          dropdown.classList.add("show");
        });

        dropdown.addEventListener("mouseleave", function () {
          dropdown.classList.remove("show");
        });
      }
    }

    handleMegaMenu();

    function handleHeaderSearch() {
      let searchBtns = document.querySelectorAll("header .open-search");
      let closeBtns = document.querySelectorAll("header .close-search");
      let Inputs = document.querySelectorAll("#header-search");
      let form = document.querySelector(".header--right--wrapper form");

      if (searchBtns && closeBtns && Inputs) {
        searchBtns.forEach((btn) => {
          btn.addEventListener("click", function (e) {
            e.preventDefault();
            Inputs.forEach((input) => {
              input.classList.add("show");
            });
            btn.style.opacity = "0";
            btn.style.visibility = "hidden";
            btn.style.pointerEvents = "none";
            closeBtns.forEach((closeBtn) => {
              closeBtn.style.opacity = "1";
              closeBtn.style.visibility = "visible";
              closeBtn.style.pointerEvents = "auto";
            });
            if (form) {
              form.style.width = "300px";
            }
          });
        });

        closeBtns.forEach((closeBtn) => {
          closeBtn.addEventListener("click", function (e) {
            e.preventDefault();
            Inputs.forEach((input) => {
              input.classList.remove("show");
            });
            closeBtn.style.opacity = "0";
            closeBtn.style.visibility = "hidden";
            closeBtn.style.pointerEvents = "none";
            searchBtns.forEach((btn) => {
              btn.style.opacity = "1";
              btn.style.visibility = "visible";
              btn.style.pointerEvents = "auto";
            });
            if (form) {
              form.style.width = "50px";
            }
          });
        });
      }
    }
    handleHeaderSearch();

    // top-melodies-slider
    $(".top-melodies-slider").owlCarousel({
      loop: true,
      margin: 18,
      nav: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
          stagePadding: 90,
        },
      },
    });
    // top-melodies-slider
    $(".pack--slider").owlCarousel({
      loop: true,
      margin: 16,
      nav: true,
      dots: false,
      autoplay: true,
      navText: [
        '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M24.9974 36.6663H14.9974C6.66406 36.6663 3.33073 33.333 3.33073 24.9997V14.9997C3.33073 6.66634 6.66406 3.33301 14.9974 3.33301H24.9974C33.3307 3.33301 36.6641 6.66634 36.6641 14.9997V24.9997C36.6641 33.333 33.3307 36.6663 24.9974 36.6663Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path class="arrow-icon" d="M22.1016 25.8829L16.2349 19.9995L22.1016 14.1162" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M15.0026 36.6663H25.0026C33.3359 36.6663 36.6693 33.333 36.6693 24.9997V14.9997C36.6693 6.66634 33.3359 3.33301 25.0026 3.33301H15.0026C6.66927 3.33301 3.33594 6.66634 3.33594 14.9997V24.9997C3.33594 33.333 6.66927 36.6663 15.0026 36.6663Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path class="arrow-icon" d="M17.8984 25.8829L23.7651 19.9995L17.8984 14.1162" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });

    // aos
    AOS.init({
      once: true,
    });

    $("select").niceSelect();

    // monthly chart
    function handleMonthlyChart() {
      let container = document.querySelector("#monthlyChart");

      if (container) {
        var dataValues = [50, 70, 60, 55, 80, 60, 50];
        var maxValue = Math.max(...dataValues);
        var maxIndex = dataValues.indexOf(maxValue);

        var barColors = dataValues.map((value) =>
          value === maxValue ? "#0ccf9f" : "#fff"
        );
        var labelColors = dataValues.map((value, index) =>
          index === maxIndex ? "#26A69A" : "#3A383E"
        );

        var options = {
          chart: {
            type: "bar",
            height: 350,
            toolbar: {
              show: false,
            },
            background: "none",
          },
          series: [
            {
              data: dataValues,
            },
          ],
          plotOptions: {
            bar: {
              distributed: true,
              columnWidth: "45%",
              dataLabels: {
                position: "top",
              },
              borderRadius: 10,
              borderRadiusApplication: "end",
            },
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            labels: {
              show: true,
              style: {
                colors: labelColors,
              },
            },
            position: "bottom",
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            tooltip: {
              enabled: false,
            },
          },
          yaxis: {
            labels: {
              show: false,
            },
          },
          grid: {
            show: false,
            padding: {
              left: 0,
              right: 0,
            },
          },
          colors: ["#333", "#333", "#333", "#26A69A", "#333", "#333", "#333"],
          colors: barColors,
          theme: {
            monochrome: {
              enabled: false,
            },
          },
          legend: {
            show: false,
          },
          tooltip: {
            enabled: true,
            theme: "dark",
            background: {
              color: "#0a0a0a",
            },
          },
        };

        var chart = new ApexCharts(container, options);
        chart.render();
      }
    }

    handleMonthlyChart();
    // handle activity chart
    function handleActivityChart() {
      let container = document.querySelector("#ActivityChart");

      if (container) {
        var dataValues = [30, 40, 25, 50, 30, 45, 35];

        // Find the highest value and its index
        var maxValue = Math.max(...dataValues);
        var maxIndex = dataValues.indexOf(maxValue);

        var options = {
          series: [
            {
              name: "series2",
              data: [20, 32, 45, 32, 34, 52, 41],
            },
          ],
          chart: {
            height: 330,
            type: "area",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
          },
          xaxis: {
            categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
          grid: {
            show: false,
          },
          yaxis: {
            labels: {
              show: false,
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "light",
              type: "vertical",
              shadeIntensity: 1,
              gradientToColors: ["rgba(255, 255, 255, 0.00)"],
              inverseColors: true,
              opacityFrom: 0.7,
              opacityTo: 0.0,
              stops: [0, 100],
            },
          },
          colors: ["#0CCF9F"],
        };

        var chart = new ApexCharts(container, options);
        chart.render();
      }
    }

    handleActivityChart();
    // handle melodies
    function handleMelody() {
      const melodies = document.querySelectorAll(".melodi");
      let currentPlayingMelody = null; // Variable to keep track of the currently playing melody

      if (melodies) {
        melodies.forEach((melody) => {
          // Create a WaveSurfer instance
          const wavesurfer = WaveSurfer.create({
            container: melody.querySelector(".wave"),
            waveColor: "#c3c3c3",
            progressColor: "#0CCF9F",
            barWidth: 2.5,
            barGap: 3,
            barRadius: 2,
            height: 30,
          });

          // Load an audio file
          wavesurfer.load(melody.dataset.audioSrc);

          const timeDisplay = melody.querySelector(".time-display");

          // Format time
          function formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
          }

          // Update the time display
          wavesurfer.on("audioprocess", function () {
            const currentTime = wavesurfer.getCurrentTime();
            timeDisplay.textContent = formatTime(currentTime);
          });

          // Play/pause button
          const playPauseBtn = melody.querySelector(".playPauseBtn");
          playPauseBtn.addEventListener("click", function () {
            if (currentPlayingMelody && currentPlayingMelody !== wavesurfer) {
              // Pause the currently playing melody
              currentPlayingMelody.pause();
              currentPlayingMelody.seekTo(0);

              // Check if currentPlayingMelody has a valid container before accessing
              if (currentPlayingMelody.container) {
                // Update the icons of the previously playing melody
                const previousMelody =
                  currentPlayingMelody.container.closest(".melodi");
                if (previousMelody) {
                  previousMelody.querySelector("#pause-icon").style.display =
                    "none";
                  previousMelody.querySelector("#play-icon").style.display =
                    "block";
                }
              }
            }

            if (currentPlayingMelody !== wavesurfer) {
              // Play the new melody and set it as the current playing melody
              wavesurfer.play();
              currentPlayingMelody = wavesurfer;
            } else {
              // Pause the current melody if it was playing
              wavesurfer.pause();
              currentPlayingMelody = null;
            }
          });

          wavesurfer.on("play", function () {
            melody.querySelector("#play-icon").style.display = "none";
            melody.querySelector("#pause-icon").style.display = "block";
            melody.querySelector("#pause-icon").classList.remove("d-none");
          });

          wavesurfer.on("pause", function () {
            melody.querySelector("#pause-icon").style.display = "none";
            melody.querySelector("#play-icon").style.display = "block";
          });
        });
      }
    }
    handleMelody();

    // handleMelodiAction
    function handleMelodiAction() {
      let melodis = document.querySelectorAll(".single--melodi");

      if (melodis) {
        melodis.forEach((melodi) => {
          melodi.addEventListener("click", function (e) {
            let wishlist = melodi.querySelector(".wishlist");
            let dotMenu = melodi.querySelector(".dots");
            // wishlist
            if (wishlist && wishlist.contains(e.target)) {
              wishlist.classList.toggle("active");
            }
            // dot menu
            if (dotMenu && dotMenu.contains(e.target)) {
              let dotMenuTrigger = e.target;
              let dropMenu =
                e.target.parentNode.querySelector(".action--dropdown");
              let options = dropMenu.querySelectorAll("li");
              dropMenu.classList.toggle("show");

              options.forEach((option) => {
                option.addEventListener("click", function () {
                  dropMenu.classList.remove("show");
                });
              });

              document.addEventListener("click", function (e) {
                if (
                  !dropMenu.contains(e.target) &&
                  !dotMenuTrigger.contains(e.target)
                ) {
                  dropMenu.classList.remove("show");
                }
              });
            }
          });
        });
      }
    }
    handleMelodiAction();

    // show loader
    function showLoader(loaderElem) {
      if (loaderElem) {
        loaderElem.style.display = "block";
      }
    }
    showLoader();
    // hide loader
    function hideLoader(loaderElem) {
      if (loaderElem) {
        loaderElem.style.display = "none";
      }
    }
    hideLoader();

    // handle file upload
    function handleFileUpload(event) {
      const input = event.target;

      const previewId = input.getAttribute("data-preview-id");
      const loaderId = input.getAttribute("data-loader-id");
      const labelId = input.getAttribute("label-id");

      const previewImg = document.getElementById(previewId);
      const loader = document.getElementById(loaderId);
      const uploadLabel = document.querySelector(labelId);
      const file = input.files[0];

      if (file) {
        showLoader(loader);

        const reader = new FileReader();

        reader.onload = function (e) {
          setTimeout(() => {
            hideLoader(loader);
            previewImg.style.display = "block";
            previewImg.src = e.target.result;
            if (uploadLabel) {
              uploadLabel.style.border = "none";
              console.log(uploadLabel);
            }
          }, 2000);
        };
        reader.readAsDataURL(file);
      }
    }
    // call the function
    let coverUpload = document.getElementById("coverUpload");
    let profileUpload = document.getElementById("profile--upload");
    if (coverUpload) {
      coverUpload.addEventListener("change", handleFileUpload);
    }
    if (profileUpload) {
      profileUpload.addEventListener("change", handleFileUpload);
    }

    let thumbnailUpload = document.getElementById("thumbnailUpload");

    if (thumbnailUpload) {
      thumbnailUpload.addEventListener("change", handleFileUpload);
    }

    let regProfileUpload = document.querySelector(".uploadRegFile");
    if (regProfileUpload) {
      regProfileUpload.addEventListener("change", handleFileUpload);
    }
    // handle defaultAudioPlayer

    function handleFileUploads(selector, validFileType) {
      const uploadBoxes = document.querySelectorAll(selector);

      uploadBoxes.forEach((uploadBox) => {
        const fileInput = uploadBox.querySelector("input[type='file']");
        const uploadLabel = uploadBox.querySelector(".packcoverUpload");
        const uploadText = uploadBox.querySelector(".upload--text");
        const fileDetails = uploadBox.querySelector(".fileDetails");
        const fileName = uploadBox.querySelector(".filename");
        const loader = uploadBox.querySelector(
          `#${fileInput.dataset.loaderId}`
        );

        // Click to upload functionality
        uploadLabel.addEventListener("click", function (event) {
          event.preventDefault();
          fileInput.click();
        });

        // File input change event
        fileInput.addEventListener("change", handleFileSelect);

        // Drag and drop events
        uploadLabel.addEventListener("dragover", handleDragOver);
        uploadLabel.addEventListener("dragleave", handleDragLeave);
        uploadLabel.addEventListener("drop", handleFileDrop);

        function handleFileSelect(event) {
          showLoader(loader);
          event.preventDefault();
          event.stopPropagation();
          const file = event.target.files[0];
          if (validateFile(file)) {
            displayFileDetails(file);
          }
        }

        function handleDragOver(event) {
          event.preventDefault();
          event.stopPropagation();
          uploadLabel.classList.add("drag-over");
        }

        function handleDragLeave(event) {
          event.preventDefault();
          event.stopPropagation();
          uploadLabel.classList.remove("drag-over");
        }

        function handleFileDrop(event) {
          event.preventDefault();
          event.stopPropagation();
          uploadLabel.classList.remove("drag-over");
          const file = event.dataTransfer.files[0];
          if (validateFile(file)) {
            displayFileDetails(file);
          }
        }

        function validateFile(file) {
          console.log(validFileType);
          if (file && file.name.endsWith(validFileType)) {
            return true;
          } else {
            alert(`Please upload a valid ${validFileType} file.`);
            return false;
          }
        }

        function displayFileDetails(file) {
          uploadText.style.display = "none";
          fileDetails.style.display = "block";
          fileName.textContent = file.name;
          loader.style.display = "none";
        }
      });
    }

    // Call the function with the specific selectors and file types
    handleFileUploads(".pack--file--upload", ".zip");
    handleFileUploads(".pack--audio-demos", ".mp3");
    handleFileUploads(".pack-melody-upload", ".wav");

    // handleDefaultAudioPlayer
    function handleDefaultAudioPlayer() {
      const audio = document.getElementById("default--audio");
      const playPauseBtn = document.querySelector(".play-pause");
      const progress = document.querySelector(".progress");
      const currentTimeElem = document.querySelector(".current-time");
      const durationElem = document.querySelector(".duration");
      const volumeControl = document.querySelector(".volume--control");
      const backwardBtn = document.querySelector(".backward");
      const forwardBtn = document.querySelector(".forward");
      const playButton = document.getElementById("play");
      const pauseButton = document.getElementById("pause");
      const soundIcon = document.getElementById("sound");
      const muteIcon = document.getElementById("mute");
      let allAlbumsPlayButtons = document.querySelectorAll(".play--demo");
      let hideAudiobtn = document.querySelector(".hide--audio");
      let defaultAudioPlayer = document.querySelector(
        ".default--audio--player"
      );
      let previousVolume = audio ? audio.volume : 1;

      if (defaultAudioPlayer) {
        // get src on card click
        allAlbumsPlayButtons.forEach((card) => {
          card.addEventListener("click", function (e) {
            e.preventDefault();
            let selectedAudioSrc = card.getAttribute("data-audio");
            console.log(card.parentNode);
            audio.setAttribute("src", selectedAudioSrc);
            togglePlayPause();
            defaultAudioPlayer.classList.add("show");
            defaultAudioPlayer.classList.add("visible");
            hideAudiobtn.querySelector("svg").classList.add("hidden");
          });
        });

        hideAudiobtn.addEventListener("click", function () {
          defaultAudioPlayer.classList.toggle("show");
          hideAudiobtn.querySelector("svg").classList.toggle("hidden");
        });

        audio.addEventListener("loadedmetadata", () => {
          durationElem.textContent = formatTime(audio.duration);
        });

        audio.addEventListener("timeupdate", () => {
          const progressPercent = (audio.currentTime / audio.duration) * 100;
          progress.style.width = `${progressPercent}%`;
          currentTimeElem.textContent = formatTime(audio.currentTime);
        });

        function togglePlayPause() {
          if (audio.paused) {
            audio.play();
            playButton.style.display = "none";
            pauseButton.style.display = "block";
          } else {
            audio.pause();
            playButton.style.display = "block";
            pauseButton.style.display = "none";
          }
        }

        function updateVolume() {
          const volumeValue = parseFloat(volumeControl.value);
          if (!isNaN(volumeValue) && volumeValue >= 0 && volumeValue <= 1) {
            audio.volume = volumeValue;

            if (volumeValue > 0) {
              soundIcon.style.display = "block";
              muteIcon.style.display = "none";
            } else {
              soundIcon.style.display = "none";
              muteIcon.style.display = "block";
            }
          }
        }

        function toggleMute() {
          if (audio.volume > 0) {
            previousVolume = audio.volume;
            audio.volume = 0;
            volumeControl.value = 0;
            soundIcon.style.display = "none";
            muteIcon.style.display = "block";
          } else {
            audio.volume = previousVolume / 2;
            volumeControl.value = previousVolume;
            volumeControl.value = audio.volume;
            soundIcon.style.display = "block";
            muteIcon.style.display = "none";
          }
        }

        function skipBackward() {
          audio.currentTime = Math.max(0, audio.currentTime - 10);
        }
        function skipForward() {
          audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
        }

        // format time
        function formatTime(time) {
          const minutes = Math.floor(time / 60);
          const seconds = Math.floor(time % 60);
          return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        }

        playPauseBtn.addEventListener("click", togglePlayPause);
        volumeControl.addEventListener("input", updateVolume);
        backwardBtn.addEventListener("click", skipBackward);
        forwardBtn.addEventListener("click", skipForward);
        soundIcon.addEventListener("click", toggleMute);
        muteIcon.addEventListener("click", toggleMute);
      }
    }
    handleDefaultAudioPlayer();

    // tooltips
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
    // handleAnimatedTab
    function handleAnimatedTab() {
      let filterGraps = document.querySelectorAll(".filter--graph");

      if (filterGraps) {
        filterGraps.forEach((graph) => {
          let items = graph.querySelectorAll(".item");
          let indicators = graph.querySelectorAll(".indicator");
          items.forEach((item) => {
            item.addEventListener("click", function () {
              items.forEach((i) => i.classList.remove("active"));
              item.classList.add("active");
              const index = this.getAttribute("data-index");
              indicators.forEach((indicator) => {
                indicator.style.left = `calc(${index} * 100% / 3)`;
              });
            });
          });
        });
      }
    }
    handleAnimatedTab();

    // handleChartFilter
    function handleChartFilter() {
      document.querySelectorAll(".melodi--filter li")?.forEach((item) => {
        item.addEventListener("click", function () {
          document
            .querySelector(".melodi--filter li.active")
            ?.classList.remove("active");
          this.classList.add("active");
        });
      });
    }
    handleChartFilter();

    // album slider
    $(".owl-carousel.album--slider").owlCarousel({
      loop: false,
      margin: 10,
      items: 1,
      dots: true,
      nav: true,
      autoplay: false,
      navText: [
        '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M24.9974 36.6663H14.9974C6.66406 36.6663 3.33073 33.333 3.33073 24.9997V14.9997C3.33073 6.66634 6.66406 3.33301 14.9974 3.33301H24.9974C33.3307 3.33301 36.6641 6.66634 36.6641 14.9997V24.9997C36.6641 33.333 33.3307 36.6663 24.9974 36.6663Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path class="arrow-icon" d="M22.1016 25.8829L16.2349 19.9995L22.1016 14.1162" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M15.0026 36.6663H25.0026C33.3359 36.6663 36.6693 33.333 36.6693 24.9997V14.9997C36.6693 6.66634 33.3359 3.33301 25.0026 3.33301H15.0026C6.66927 3.33301 3.33594 6.66634 3.33594 14.9997V24.9997C3.33594 33.333 6.66927 36.6663 15.0026 36.6663Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path class="arrow-icon" d="M17.8984 25.8829L23.7651 19.9995L17.8984 14.1162" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      ],
    });
    // Function to show popup
    function showPopup(popElement) {
      popElement?.classList.add("show");
      document.body.style.overflow = "hidden";
    }

    // Function to hide popup
    function hidePopup(popElement) {
      popElement?.classList.remove("show");
      document.body.style.overflow = "auto";
    }

    // Function to handle popup interaction
    function handleProPopup() {
      let trigger = document.querySelector(".menu--bottom li a");
      let popup = document.getElementById("proPopup--wrapper");
      let closeBtn = document.querySelector("#proPopup .top--header svg");

      if (trigger && popup) {
        trigger.addEventListener("click", function (event) {
          event.preventDefault(); // Prevent default action of the link
          showPopup(popup);
        });
        closeBtn.addEventListener("click", function () {
          hidePopup(popup);
        });
      }
    }
    handleProPopup();

    // handle Collab popup
    function handleCollabPopup() {
      let triggers = document.querySelectorAll(".single--melodi .download");
      let popup = document.getElementById("collab--popup--wrapp");
      let closeBtns = document.querySelectorAll(
        "#collab--popup--wrapp .close--modal"
      );

      if (triggers && popup) {
        triggers.forEach((trigger) => {
          trigger.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default action of the link
            showPopup(popup);
          });
        });
        closeBtns.forEach((closeBtn) => {
          closeBtn.addEventListener("click", function () {
            hidePopup(popup);
          });
        });
      }
    }
    handleCollabPopup();

    // video popup home
    $(".vid--play").magnificPopup({
      type: "iframe",
      iframe: {
        patterns: {
          youtube: {
            index: "youtube.com/",

            id: "v=",
            src: "https://www.youtube.com/embed/%id%?autoplay=1",
          },
        },

        srcAction: "iframe_src",
      },
    });
    // initial call
    function AddMelodiesOnLoad() {
      let addmelodiesOptions = document.querySelectorAll(
        ".add--melodies--inner"
      );
      if (addmelodiesOptions) {
        addmelodiesOptions.forEach((item, index) => {
          // handleRadioInput(index);
          // melodiUpload(index);
        });
      }
    }
    AddMelodiesOnLoad();

    // handleSingleAddMelodies
    function handleSingleAddMelodies() {
      let melodiesContainer = document.querySelector(".add--melodies--inner");
      let melodyCounter = document.querySelectorAll(
        ".add--melodies--options"
      ).length;

      if (melodiesContainer) {
        let addBtn = document.querySelector(".add-melodi-btn");

        addBtn.addEventListener("click", function (e) {
          melodyCounter++;
          let AddItems = `<div class="add--melodies--options mt_80" data-counter="${melodyCounter}">
        <div class="custom--input--row mt_45">
          <div class="left--side m-name">
            <div class="row--title">
              <p>Melody Name</p>
            </div>
            <div class="input">
              <input type="text" id="melody-name-${melodyCounter}">
            </div>
          </div>
          <div class="right--side genres">
            <div class="row--title">
              <p>Genres</p>
            </div>
            <div class="select--box">
              <select id="genres-select-${melodyCounter}" style="display: none;">
                <option selected="" disabled="">Choose from dropdown</option>
                <option value="1">Trap</option>
                <option value="2">Reggaeton</option>
                <option value="3">Drill</option>
                <option value="4">RnB</option>
                <option value="5">Afro Beat</option>
              </select>
              <div class="nice-select" tabindex="0">
                <span class="current">Choose from dropdown</span>
                <ul class="list">
                  <li data-value="Choose from dropdown" class="option selected disabled">Choose from dropdown</li>
                  <li data-value="1" class="option">Trap</li>
                  <li data-value="2" class="option">Reggaeton</li>
                  <li data-value="3" class="option">Drill</li>
                  <li data-value="4" class="option">RnB</li>
                  <li data-value="5" class="option">Afro Beat</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="custom--input--rowv2 mt_45 add--bpm">
          <div class="left--side">
            <div class="row--title">
              <p>Add BPM</p>
            </div>
            <div class="radio--control">
              <div class="radio--group">
                <input id="exact-${melodyCounter}" type="radio" name="bpm-group-${melodyCounter}" required="">
                <label for="exact-${melodyCounter}">Exact</label>
              </div>
              <input class="hide" type="text" id="forExact-${melodyCounter}">
            </div>
          </div>
          <div class="right--side">
            <div class="radio--control">
              <div class="radio--group">
                <input id="range-${melodyCounter}" type="radio" name="bpm-group-${melodyCounter}" required="">
                <label for="range-${melodyCounter}">Range</label>
              </div>
              <div class="range--inputs hide">
                <input type="text" id="range-start-${melodyCounter}">
                <p>To</p>
                <input type="text" id="range-end-${melodyCounter}">
              </div>
            </div>
          </div>
        </div>
        <div class="custom--input--rowv2 mt_45 add--key">
          <div class="left--side">
            <div class="row--title">
              <p>Add Key</p>
            </div>
            <div class="radio--control">
              <div class="radio--group">
                <input id="major-${melodyCounter}" type="radio" name="key-group-${melodyCounter}" required="">
                <label for="major-${melodyCounter}">Major</label>
              </div>
              <div class="hide">
                <select id="key-major-select-${melodyCounter}" style="display: none;">
                  <option selected="" disabled="">Choose from dropdown</option>
                  <option value="1">Key 1</option>
                  <option value="2">Key 2</option>
                  <option value="3">Key 3</option>
                </select>
                <div class="nice-select" tabindex="0">
                  <span class="current">Choose from dropdown</span>
                  <ul class="list">
                    <li data-value="Choose from dropdown" class="option selected disabled">Choose from dropdown</li>
                    <li data-value="1" class="option">Key 1</li>
                    <li data-value="2" class="option">Key 2</li>
                    <li data-value="3" class="option">Key 3</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="right--side">
            <div class="radio--control">
              <div class="radio--group">
                <input id="sharp-${melodyCounter}" type="radio" name="key-group-${melodyCounter}" required="">
                <label for="sharp-${melodyCounter}">Sharp</label>
              </div>
              <div class="select--box">
                <div class="hide">
                  <select id="key-sharp-select-${melodyCounter}" style="display: none;">
                    <option selected="" disabled="">Choose from dropdown</option>
                    <option value="1">Key 1</option>
                    <option value="2">Key 2</option>
                    <option value="3">Key 3</option>
                  </select>
                  <div class="nice-select" tabindex="0">
                    <span class="current">Choose from dropdown</span>
                    <ul class="list">
                      <li data-value="Choose from dropdown" class="option selected disabled">Choose from dropdown</li>
                      <li data-value="1" class="option">Key 1</li>
                      <li data-value="2" class="option">Key 2</li>
                      <li data-value="3" class="option">Key 3</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="custom--input--row mt_45">
          <div class="left--side m-name">
            <div class="row--title">
              <p>Artist Type</p>
            </div>
            <div class="select--box">
              <select id="artist-select-${melodyCounter}" style="display: none;">
                <option selected="" disabled="">Choose from dropdown</option>
                <option value="1">Drake</option>
                <option value="2">Travis Scott</option>
                <option value="3">Juice WRLD</option>
                <option value="4">Lil Baby</option>
                <option value="5">Roddy Ricch</option>
              </select>
              <div class="nice-select" tabindex="0">
                <span class="current">Choose from dropdown</span>
                <ul class="list">
                  <li data-value="Choose from dropdown" class="option selected disabled">Choose from dropdown</li>
                  <li data-value="1" class="option">Drake</li>
                  <li data-value="2" class="option">Travis Scott</li>
                  <li data-value="3" class="option">Juice WRLD</li>
                  <li data-value="4" class="option">Lil Baby</li>
                  <li data-value="5" class="option">Roddy Ricch</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="right--side genres">
            <div class="row--title">Instruments</div>
            <div class="select--box">
              <select id="instruments-select-${melodyCounter}" style="display: none;">
                <option selected="" disabled="">Choose from dropdown</option>
                <option value="1">Guitar</option>
                <option value="2">Keys</option>
                <option value="3">Vocals</option>
                <option value="4">Synth</option>
                <option value="5">Pads</option>
              </select>
              <div class="nice-select" tabindex="0">
                <span class="current">Choose from dropdown</span>
                <ul class="list">
                  <li data-value="Choose from dropdown" class="option selected disabled">Choose from dropdown</li>
                  <li data-value="1" class="option">Guitar</li>
                  <li data-value="2" class="option">Keys</li>
                  <li data-value="3" class="option">Vocals</li>
                  <li data-value="4" class="option">Synth</li>
                  <li data-value="5" class="option">Pads</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="custom--input--row mt_45 upload">
          <div class="left--side m-name">
            <div class="row--title">
              <p>Melody File</p>
            </div>
            <div class="uplod--melodi">
              <input type="file" id="melodi-upload-${melodyCounter}" data-filename=".file-name-melodi-${melodyCounter}">
              <label for="melodi-upload-${melodyCounter}">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21.6668 14.3L21.2668 19.3C21.1168 20.83 20.9968 22 18.2868 22H5.70684C2.99684 22 2.87684 20.83 2.72684 19.3L2.32684 14.3C2.24684 13.47 2.50684 12.7 2.97684 12.11C2.98684 12.1 2.98684 12.1 2.99684 12.09C3.54684 11.42 4.37684 11 5.30684 11H18.6868C19.6168 11 20.4368 11.42 20.9768 12.07C20.9868 12.08 20.9968 12.09 20.9968 12.1C21.4868 12.69 21.7568 13.46 21.6668 14.3Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10"></path>
                  <path d="M3.5 11.4303V6.28027C3.5 2.88027 4.35 2.03027 7.75 2.03027H9.02C10.29 2.03027 10.58 2.41027 11.06 3.05027L12.33 4.75027C12.65 5.17027 12.84 5.43027 13.69 5.43027H16.24C19.64 5.43027 20.49 6.28027 20.49 9.68027V11.4703" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M9.42969 17H14.5697" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <p class="file-name-melodi-${melodyCounter}">Add File</p>
              </label>
            </div>
          </div>
          <div class="right--side genres">
            <div class="row--title">
              <p>Melody File</p>
            </div>
            <div class="uplod--melodi license--upload">
              <input type="file" id="license-upload-${melodyCounter}" data-filename=".file-name-license-${melodyCounter}">
              <label for="license-upload-${melodyCounter}">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21.6668 14.3L21.2668 19.3C21.1168 20.83 20.9968 22 18.2868 22H5.70684C2.99684 22 2.87684 20.83 2.72684 19.3L2.32684 14.3C2.24684 13.47 2.50684 12.7 2.97684 12.11C2.98684 12.1 2.98684 12.1 2.99684 12.09C3.54684 11.42 4.37684 11 5.30684 11H18.6868C19.6168 11 20.4368 11.42 20.9768 12.07C20.9868 12.08 20.9968 12.09 20.9968 12.1C21.4868 12.69 21.7568 13.46 21.6668 14.3Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10"></path>
                  <path d="M3.5 11.4303V6.28027C3.5 2.88027 4.35 2.03027 7.75 2.03027H9.02C10.29 2.03027 10.58 2.41027 11.06 3.05027L12.33 4.75027C12.65 5.17027 12.84 5.43027 13.69 5.43027H16.24C19.64 5.43027 20.49 6.28027 20.49 9.68027V11.4703" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M9.42969 17H14.5697" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <p class="file-name-license-${melodyCounter}">Add File</p>
              </label>
            </div>
          </div>
        </div>
      </div>`;
          e.preventDefault();
          melodiesContainer.insertAdjacentHTML("beforeend", AddItems);
          handleRadioInput(melodyCounter);
          melodiUpload(melodyCounter);
        });
      }
    }
    // handleSingleAddMelodies();

    // handle radio input
    function handleRadioInput(counter) {
      const addBpm = document.querySelector(
        `.add--melodies--options[data-counter="${counter}"] .add--bpm`
      );
      const addKey = document.querySelector(
        `.add--melodies--options[data-counter="${counter}"] .add--key`
      );

      if (addBpm && addKey) {
        const exactRadio = addBpm.querySelector(`#exact-${counter}`);
        const rangeRadio = addBpm.querySelector(`#range-${counter}`);
        let exactInput = addBpm.querySelector(`#forExact-${counter}`);
        let rangeInputs = addBpm.querySelector(`.range--inputs`);

        const majorRadio = addKey.querySelector(`#major-${counter}`);
        const sharpRadio = addKey.querySelector(`#sharp-${counter}`);
        let selectLeft = addKey.querySelector(`.left--side .hide`);
        let selectRight = addKey.querySelector(`.right--side .hide`);

        exactRadio?.addEventListener("change", function () {
          if (exactRadio.checked) {
            console.log("checked");
            exactInput.classList.remove("hide");
            exactInput.classList.add("show");
            rangeInputs.classList.add("hide");
            rangeInputs.classList.remove("show");
          }
        });
        rangeRadio?.addEventListener("change", function () {
          if (rangeRadio.checked) {
            console.log("checked");
            rangeInputs.classList.remove("hide");
            rangeInputs.classList.add("show");
            exactInput.classList.add("hide");
            exactInput.classList.remove("show");
          }
        });
        majorRadio?.addEventListener("change", function () {
          if (majorRadio.checked) {
            console.log("checked");
            selectLeft.classList.remove("hide");
            selectLeft.classList.add("show");
            selectRight.classList.add("hide");
            selectRight.classList.remove("show");
          }
        });
        sharpRadio?.addEventListener("change", function () {
          if (sharpRadio.checked) {
            console.log("checked");
            selectLeft.classList.add("hide");
            selectLeft.classList.remove("show");
            selectRight.classList.remove("hide");
            selectRight.classList.add("show");
          }
        });
      }
    }

    // melodiUpload
    function melodiUpload(counter) {
      const melodiUpload = document.getElementById(`melodi-upload-${counter}`);
      const licenseUpload = document.getElementById(
        `license--upload-${counter}`
      );

      const melodiFileUploadHandler = (event) => {
        const input = event.target;
        const file = input.files[0];
        let fileData = input.getAttribute("data-filename");
        let fileNameElement = document.querySelector(fileData);
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            let fileName = input.files[0].name;
            fileNameElement.textContent = fileName;
          };
          reader.readAsDataURL(file);
        }
      };

      if (melodiUpload) {
        melodiUpload.addEventListener("change", melodiFileUploadHandler);
      }

      if (licenseUpload) {
        licenseUpload.addEventListener("change", melodiFileUploadHandler);
      }
    }

    function handleAddGenresDropdown() {
      let addGenresWrapp = document.querySelectorAll(".pack--genres");

      addGenresWrapp.forEach((item) => {
        let trigger = item.querySelector(".trigger");
        let dropdown = item.querySelector(".genres--dropdown");
        let allGenresContainer = item.querySelector(".all--added--genres");
        let addGenresDiv = allGenresContainer.querySelector(".add--genres");

        if (trigger) {
          trigger.addEventListener("click", function (event) {
            event.stopPropagation();
            dropdown.classList.add("show");
          });
        }

        dropdown.addEventListener("click", function (event) {
          if (event.target.tagName.toLowerCase() === "li") {
            let selectedGenre = decodeHtmlEntities(
              event.target.innerHTML.trim()
            );
            let genreExists = false;

            // decodeHtmlEntities function
            function decodeHtmlEntities(text) {
              let textarea = document.createElement("textarea");
              textarea.innerHTML = text;
              return textarea.value;
            }

            // Check if the genre already exists before the addGenresDiv

            // Ensure we only compare actual genre list items, not the addGenresDiv itself
            let existingGenres = Array.from(allGenresContainer.children).filter(
              (li) => li !== addGenresDiv && li.tagName.toLowerCase() === "li"
            );

            for (let li of existingGenres) {
              let genreName = li.firstChild.textContent.trim();

              if (genreName.toLowerCase() === selectedGenre.toLowerCase()) {
                genreExists = true;
                break;
              }
            }

            // If the genre doesn't exist, append it to the list
            if (!genreExists) {
              let liElement = document.createElement("li");
              liElement.textContent = selectedGenre;
              // Create a close icon element
              let closeIcon = document.createElement("span");
              closeIcon.innerHTML = "&times;";
              closeIcon.classList.add("close-icon");
              // Add click event listener to the close icon to remove the li element
              closeIcon.addEventListener("click", function (e) {
                e.stopPropagation();
                liElement.remove();
              });
              liElement.appendChild(closeIcon);
              allGenresContainer.insertBefore(liElement, addGenresDiv);
            } else {
              alert(selectedGenre + " is already added.");
            }
          }
        });

        document.addEventListener("click", function (event) {
          let target = event.target;
          if (
            (target !== trigger && !dropdown.contains(target)) ||
            event.target.tagName.toLowerCase() === "li"
          ) {
            dropdown.classList.remove("show");
          }
        });
      });
    }
    handleAddGenresDropdown();

    // handleBMPdropdown
    function handleBMPdropdown() {
      let BPMContainers = document.querySelectorAll(".option.bmp--range");

      if (BPMContainers) {
        BPMContainers.forEach((container) => {
          let trigger = container.querySelector(".trigger");
          let ArrowIcon = container.querySelector(".trigger svg");
          let dropdown = container.querySelector(".bmp--dropdown");
          let extactRadios = document.querySelectorAll(".exactRadio");
          let rangeRadios = document.querySelectorAll(".rangeRadio");
          let extactInputs = document.querySelectorAll(".exactInput");
          let rangeInputs = document.querySelectorAll(".rangeInput");
          let clearButtons = document.querySelectorAll(".clearInputs");
          let saveButtons = document.querySelectorAll(".saveChanges");

          trigger.addEventListener("click", function () {
            dropdown.classList.toggle("show");
            ArrowIcon.classList.toggle("show");
          });

          // initial load
          extactInputs.forEach((input) => {
            input.style.opacity = "1";
            input.style.visibility = "visible";
          });
          extactRadios.forEach((radio) => {
            radio.addEventListener("change", function () {
              if (radio.checked) {
                extactInputs.forEach((input) => {
                  input.style.opacity = "1";
                  input.style.visibility = "visible";
                });
                rangeInputs.forEach((input) => {
                  input.style.opacity = "0";
                  input.style.visibility = "hidden";
                });
                document
                  .querySelectorAll("input[type='number']")
                  .forEach(function (input) {
                    input.value = "";
                  });
              }
            });

            rangeRadios.forEach((radio) => {
              radio.addEventListener("change", function () {
                if (radio.checked) {
                  rangeInputs.forEach((input) => {
                    input.style.opacity = "1";
                    input.style.visibility = "visible";
                  });
                  extactInputs.forEach((input) => {
                    input.style.opacity = "0";
                    input.style.visibility = "hidden";
                  });
                  document
                    .querySelectorAll("input[type='number']")
                    .forEach(function (input) {
                      input.value = "";
                    });
                }
              });
            });

            clearButtons.forEach((clearButton) => {
              clearButton.addEventListener("click", function (e) {
                e.preventDefault();
                document
                  .querySelectorAll("input[type='number']")
                  .forEach(function (input) {
                    input.value = "";
                  });
              });
            });

            saveButtons.forEach((saveButton) => {
              saveButton.addEventListener("click", function (e) {
                e.preventDefault();
                dropdown.classList.remove("show");
              });
            });

            document.addEventListener("click", function (e) {
              let target = e.target;
              if (
                target !== dropdown &&
                !dropdown.contains(target) &&
                !trigger.contains(target)
              ) {
                dropdown.classList.remove("show");
              }
            });
          });
        });
      }
    }
    handleBMPdropdown();
    // handleKeyDropdown
    function handleKeyDropdown() {
      let keysWrapp = document.querySelectorAll(".keys-option--wrapp");
      if (keysWrapp) {
        keysWrapp.forEach((keyWrapp) => {
          let trigger = keyWrapp.querySelector(".trigger");
          let dropdowns = keyWrapp.querySelectorAll(".key--dropdown");
          let clearButtons = keyWrapp.querySelectorAll(".clearInputs");
          let saveButtons = keyWrapp.querySelectorAll(".saveChanges");
          let keyInputs = keyWrapp.querySelectorAll(
            '.key--group input[type="radio"]'
          );
          let keyTypes = keyWrapp.querySelectorAll(
            '.key--type input[type="radio"]'
          );
          let selectedKey = "";
          let selectedKeyType = "";

          trigger.addEventListener("click", () => {
            dropdowns.forEach((dropdown) => {
              dropdown.classList.toggle("show");
            });
          });

          keyInputs.forEach((key) => {
            key.addEventListener("click", function () {
              selectedKey = this.nextElementSibling.textContent;
              updateTriggerText();
            });
          });

          keyTypes.forEach((Keytype) => {
            Keytype.addEventListener("click", function () {
              selectedKeyType = this.nextElementSibling.textContent.trim();
              updateTriggerText();
            });
          });
          // updateTriggerText
          function updateTriggerText() {
            if (selectedKey) {
              trigger.innerHTML = selectedKey;
              if (selectedKeyType) {
                trigger.innerHTML += ` ${selectedKeyType}`;
              }
            } else if (selectedKeyType) {
              trigger.innerHTML = selectedKeyType;
            }
          }
          clearButtons.forEach((clearBtn) => {
            clearBtn.addEventListener("click", function (e) {
              e.preventDefault();
              selectedKey = "";
              selectedKeyType = "";
              let svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <mask id="mask0_5256_2893" style="mask-type: luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="10" height="10">
                      <path d="M0 10H10V0H0V10Z" fill="white"></path>
                    </mask>
                    <g mask="url(#mask0_5256_2893)">
                      <path d="M1.37607 2.62573L5.10752 6.35717L8.61718 2.84751L9.50109 3.73138L5.10752 8.12494L0.492188 3.50962L1.37607 2.62573Z" fill="white" fill-opacity="0.4"></path>
                    </g>
                  </svg>`;
              trigger.innerHTML = "Key" + svgIcon;
            });
          });
          saveButtons.forEach((saveBtn) => {
            saveBtn.addEventListener("click", function (e) {
              e.preventDefault();
              dropdowns.forEach((dropdown) => {
                dropdown.classList.remove("show");
              });
            });
          });
          dropdowns.forEach((dropdown) => {
            document.addEventListener("click", function (e) {
              let target = e.target;
              if (
                target !== dropdown &&
                !dropdown.contains(target) &&
                !trigger.contains(target)
              ) {
                dropdown.classList.remove("show");
              }
            });
          });
        });
      }
    }
    handleKeyDropdown();
  });
})(jQuery);
